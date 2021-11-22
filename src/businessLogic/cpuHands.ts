import { Jyanken } from './jynkenJudge';

export function cpuHands(): string {
    const handsNumber = Math.floor(Math.random() * 3);

    switch (handsNumber) {
        case 0:
            return Jyanken.Gu;
        case 1:
            return Jyanken.Choki;
        case 2:
            return Jyanken.Pa;
        default: {
            throw new Error('グー、チョキ、パー以外は出さないでね！');
        }
    }
}
