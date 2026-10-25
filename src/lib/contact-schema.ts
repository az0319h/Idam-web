import { z } from "zod";
import { consultationAreas } from "@/components/sites/a365/data";

/** 숫자만 남긴다 (하이픈, 공백, 괄호, 점 제거). */
export const normalizePhone = (v: string) => v.replace(/[^0-9]/g, "");

/**
 * 한국 전화번호. 하이픈 유무·형태 자유.
 * - 휴대전화 010/011/016/017/018/019 (10~11자리)
 * - 서울 02 (9~10자리), 그 외 지역번호 03x~06x (10~11자리)
 * - 인터넷전화 070, 안심번호 050x (11자리)
 * - 대표번호 15xx/16xx/18xx-xxxx (8자리)
 */
const phonePattern = /^(01[016789][0-9]{7,8}|02[0-9]{7,8}|0[3-6][0-9][0-9]{7,8}|070[0-9]{8}|050[0-9]{8,9}|1[5-8][0-9]{2}[0-9]{4})$/;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "이름은 2글자 이상 적어 주세요.").max(20, "이름은 20자 이내로 적어 주세요."),
  phone: z
    .string()
    .trim()
    .min(1, "연락처를 적어 주세요.")
    .transform(normalizePhone)
    .refine((v) => phonePattern.test(v), "연락 가능한 전화번호를 적어 주세요. 예: 010-1234-5678, 02-123-4567"),
  area: z.enum(consultationAreas, { message: "상담 분야를 선택해 주세요." }),
  message: z.string().trim().min(2, "내용은 2글자 이상 적어 주세요.").max(1000, "내용은 1000자 이내로 적어 주세요."),
  privacy: z.literal(true, { message: "개인정보 수집·이용에 동의해 주세요." }),
  /** 스팸 봇용 허니팟. 사람은 비워 둔다. */
  website: z.string().optional(),
});

/** 폼 입력값 (검증 전) */
export type ContactInput = z.input<typeof contactSchema>;
/** 검증·정규화된 값 */
export type ContactData = z.output<typeof contactSchema>;

/** 010-1234-5678 / 02-123-4567 / 1588-1234 형태로 표시용 포맷 */
export function formatPhone(digits: string): string {
  if (/^02[0-9]{7,8}$/.test(digits)) return digits.replace(/^(02)([0-9]{3,4})([0-9]{4})$/, "$1-$2-$3");
  if (/^1[5-8][0-9]{6}$/.test(digits)) return digits.replace(/^([0-9]{4})([0-9]{4})$/, "$1-$2");
  return digits.replace(/^([0-9]{3})([0-9]{3,4})([0-9]{4})$/, "$1-$2-$3");
}
