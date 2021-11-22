export const Jyanken = {
    Gu: 'グー',
    Choki: 'チョキ',
    Pa: 'パー',
} as const;

export function jyankenJudge(hands: string, cpu: string): string {
    if (hands === Jyanken.Gu) {
        if (cpu === Jyanken.Gu) {
            return 'あいこ！';
        } else if (cpu === Jyanken.Choki) {
            return 'かち！おめでとう！';
        } else if (cpu === Jyanken.Pa) {
            return 'まけ！ざぁこ！';
        }
    }

    if (hands === Jyanken.Choki) {
        if (cpu === Jyanken.Gu) {
            return 'まけ！ざぁこ！';
        } else if (cpu === Jyanken.Choki) {
            return 'あいこ！';
        } else if (cpu === Jyanken.Pa) {
            return 'かち！おめでとう！';
        }
    }

    if (hands === Jyanken.Pa) {
        if (cpu === Jyanken.Gu) {
            return 'かち！おめでとう！';
        } else if (cpu === Jyanken.Choki) {
            return 'まけ！ざぁこ！';
        } else if (cpu === Jyanken.Pa) {
            return 'あいこ！';
        }
    }

    throw new Error('じゃんけんの手ではありません');
}
