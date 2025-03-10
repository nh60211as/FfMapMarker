import { BoothNumber } from '../types/BoothNumber';
import { TargetingBoxDimension } from '../types/TargetingBoxDimension';

// NOTE: The implementation should be changed with each event
export function boothNumberListToTargetingBoxDimension(
  boothNumberList: Array<BoothNumber>,
): TargetingBoxDimension {
  switch (boothNumberList.length) {
    case 1:
      return boothNumberToTargetingBoxDimension(boothNumberList[0]);
    case 2:
      return boothNumberListOf2ToTargetingBoxDimension(
        boothNumberList[0],
        boothNumberList[1],
      );
    default:
      throw Error(
        `Unsupported boothNumberList size: [${boothNumberList.length}]`,
      );
  }
}

function boothNumberToTargetingBoxDimension(
  boothNumber: BoothNumber,
): TargetingBoxDimension {
  const BOOTH_X_SIZE = 85;
  const BOOTH_Y_SIZE = 68.5;

  switch (boothNumber.row) {
    case 'E':
      return {
        x: getE_X_Axis(boothNumber.number),
        y:
          getE_Y_Axis(boothNumber.number) +
          ((boothNumber.number - 1) % 8) * BOOTH_Y_SIZE,
        width: BOOTH_X_SIZE,
        height: BOOTH_Y_SIZE,
      };
    case 'F':
      return {
        x: getF_X_Axis(boothNumber.number),
        y: getF_Y_Axis(boothNumber.number, BOOTH_Y_SIZE),
        width: BOOTH_X_SIZE,
        height: BOOTH_Y_SIZE,
      };
  }
}

function boothNumberListOf2ToTargetingBoxDimension(
  boothNumber1: BoothNumber,
  boothNumber2: BoothNumber,
): TargetingBoxDimension {
  const box1: TargetingBoxDimension =
    boothNumberToTargetingBoxDimension(boothNumber1);
  const box2: TargetingBoxDimension =
    boothNumberToTargetingBoxDimension(boothNumber2);
  const x = Math.min(box1.x, box2.x);
  const y = Math.min(box1.y, box2.y);
  const width = Math.max(box1.x + box1.width, box2.x + box2.width) - x;
  const height = Math.max(box1.y + box1.height, box2.y + box2.height) - y;

  return { x, y, width, height };
}

function getE_X_Axis(num: number): number {
  const numDivided = Math.floor((num - 1) / 8);
  switch (numDivided) {
    case 0:
    case 4:
    case 8:
      return 1519;
    case 1:
    case 5:
    case 9:
      return 1353;
    case 2:
    case 6:
    case 10:
      return 1114;
    case 3:
    case 7:
    case 11:
      return 945;
    default:
      throw Error(`Impossible value ${numDivided} in function getE_X_Axis`);
  }
}

function getE_Y_Axis(num: number): number {
  const numDivided = Math.floor((num - 1) / 8);
  switch (numDivided) {
    case 0:
    case 1:
    case 2:
    case 3:
      return 829;
    case 4:
    case 5:
    case 6:
    case 7:
      return 1578;
    case 8:
    case 9:
    case 10:
    case 11:
      return 2312;
    default:
      throw Error(`Impossible value ${numDivided} in function getF_Y_Axis`);
  }
}

function getF_X_Axis(num: number): number {
  if (isBetween(num, 1, 6)) {
    return 1519;
  }
  if (isBetween(num, 7, 12)) {
    return 1353;
  }
  if (isBetween(num, 13, 18)) {
    return 1114;
  }
  if (isBetween(num, 19, 24)) {
    return 945;
  }
  if (isBetween(num, 25, 32)) {
    return 710;
  }
  if (isBetween(num, 33, 40)) {
    return 539;
  }

  throw Error(`Impossible value ${num} in function getF_X_Axis`);
}

function getF_Y_Axis(num: number, boothYSize): number {
  if (isBetween(num, 1, 6)) {
    return 3133 + ((num - 1) % 6) * boothYSize;
  }
  if (isBetween(num, 7, 12)) {
    return 3133 + ((num - 1) % 6) * boothYSize;
  }
  if (isBetween(num, 13, 18)) {
    return 3133 + ((num - 1) % 6) * boothYSize;
  }
  if (isBetween(num, 19, 24)) {
    return 3133 + ((num - 1) % 6) * boothYSize;
  }
  if (isBetween(num, 25, 32)) {
    return 3133 + ((num - 1) % 8) * boothYSize;
  }
  if (isBetween(num, 33, 40)) {
    return 3133 + ((num - 1) % 8) * boothYSize;
  }

  throw Error(`Impossible value ${num} in function getF_Y_Axis`);
}

function isBetween(num: number, low: number, high: number): boolean {
  return low <= num && num <= high;
}
