#!/usr/bin/env python3
"""
Freesentation 글꼴을 Google Fonts 의 한글 unicode-range 조각(124개)으로 나눈다.

원본 woff2 한 벌이 465KB 라서 휴대폰 첫 화면이 글꼴을 기다렸다. 조각으로 나누면
브라우저가 페이지에 실제로 쓰인 글자가 든 조각만 받는다 (보통 페이지당 60~120KB).

사용법 (fonttools 와 brotli 가 필요하다):
  python3 -m venv .venv && .venv/bin/pip install fonttools brotli
  .venv/bin/python scripts/subset-fonts.py

결과:
  public/sites/idam/fonts/slices/<이름>.<n>.woff2
  src/components/sites/a365/fonts.css   (@font-face 선언, 자동 생성)
"""
import re
import sys
import urllib.request
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parent.parent
FONT_DIR = ROOT / "public/sites/idam/fonts"
OUT_DIR = FONT_DIR / "slices"
CSS_OUT = ROOT / "src/components/sites/a365/fonts.css"
FONTS = [("Freesentation-4Regular", "400"), ("Freesentation-5Medium", "500")]
UA = "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 Chrome/120 Safari/537.36"
GOOGLE_CSS = "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400&display=swap"


def google_ranges() -> list[str]:
    req = urllib.request.Request(GOOGLE_CSS, headers={"User-Agent": UA})
    css = urllib.request.urlopen(req).read().decode()
    ranges = re.findall(r"unicode-range:\s*([^;]+);", css)
    if len(ranges) < 100:
        sys.exit("Google Fonts 의 한글 조각 목록을 받지 못했습니다.")
    return ranges


def codepoints(rng: str) -> set[int]:
    out: set[int] = set()
    for part in rng.replace("U+", "").split(","):
        a, _, b = part.strip().partition("-")
        lo = int(a, 16)
        hi = int(b, 16) if b else lo
        out.update(range(lo, hi + 1))
    return out


def main() -> None:
    OUT_DIR.mkdir(exist_ok=True)
    for old in OUT_DIR.glob("*.woff2"):
        old.unlink()
    ranges = google_ranges()
    faces: list[str] = []
    for name, weight in FONTS:
        src = FONT_DIR / f"{name}.woff2"
        font = TTFont(src)
        available = set(font.getBestCmap().keys())
        total = 0
        for i, rng in enumerate(ranges):
            cps = codepoints(rng) & available
            if not cps:
                continue
            out = OUT_DIR / f"{name}.{i}.woff2"
            options = subset.Options(flavor="woff2", layout_features=["*"], hinting=False, desubroutinize=True, notdef_outline=True)
            sub = subset.Subsetter(options)
            sub.populate(unicodes=cps)
            f = TTFont(src)
            sub.subset(f)
            f.flavor = "woff2"
            f.save(out)
            total += out.stat().st_size
            faces.append(
                "@font-face {\n"
                "  font-family: 'Freesentation';\n"
                "  font-style: normal;\n"
                f"  font-weight: {weight};\n"
                "  font-display: swap;\n"
                f"  src: url(/sites/idam/fonts/slices/{out.name}) format('woff2');\n"
                f"  unicode-range: {rng};\n"
                "}"
            )
        print(f"{name}: {total // 1024}KB in slices (원본 {src.stat().st_size // 1024}KB)")
    header = "/* scripts/subset-fonts.py 가 만든 파일. 직접 고치지 말 것. */\n"
    CSS_OUT.write_text(header + "\n".join(faces) + "\n")
    print(f"{len(faces)} faces → {CSS_OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
