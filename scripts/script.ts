import * as fs from "fs";
import * as csv from "csv-parser";
import { GroupData } from "../src/types/GroupData";
import { Booth } from "../src/types/Booth";
import { BoothActiveDay } from "../src/types/BoothActiveDay";
import { BoothNumber } from "../src/types/BoothNumber";

export async function csvToGroupDataList(
  groupListFilePath: string,
  boothListFilePath: string,
): Promise<Array<GroupData>> {
  const groupDataListWithoutBoothList: Array<GroupData> =
    await csvToGroupDataListWithoutBoothList(groupListFilePath);

  const groupDataList: Array<GroupData> = await fillGroupDataBoothListByCsv(
    groupDataListWithoutBoothList,
    boothListFilePath,
  );
  return groupDataList;
}

function csvToGroupDataListWithoutBoothList(
  groupListFilePath: string,
): Promise<Array<GroupData>> {
  return new Promise((resolve, reject) => {
    const result: GroupData[] = [];

    fs.createReadStream(groupListFilePath)
      .pipe(
        csv({
          // FIXME: when using headers property, the header itself will be used in row data
          // headers: ["GROUP_ID", "GROUP_NAME", "GROUP_LINK"],
          separator: ",",
          quote: '"',
        }),
      )
      .on("data", (row) => {
        result.push({
          groupId: row.GROUP_ID,
          groupName: row.GROUP_NAME,
          groupLink: row.GROUP_LINK || null,
          boothList: [],
        });
      })
      .on("end", () => {
        resolve(result); // Resolve with the array of GroupData
      })
      .on("error", (err) => {
        reject(err); // Reject on error
      });
  });
}

function fillGroupDataBoothListByCsv(
  groupDataListWithoutBoothList: Array<GroupData>,
  boothListFilePath: string,
): Promise<Array<GroupData>> {
  return new Promise((resolve, reject) => {
    let result: GroupData[] = groupDataListWithoutBoothList;

    fs.createReadStream(boothListFilePath)
      .pipe(
        csv({
          // headers: ["BOOTH_ACTIVE_DAY", "BOOTH_LIST", "GROUP_NAME"],
          separator: ",",
          quote: '"',
        }),
      )
      .on("data", (row) => {
        result = addBoothToGroupDataByGroupId(
          result,
          row.GROUP_NAME,
          convertToBooth(row.BOOTH_ACTIVE_DAY, row.BOOTH_LIST),
        );
      })
      .on("end", () => {
        resolve(result); // Resolve with the array of GroupData
      })
      .on("error", (err) => {
        reject(err); // Reject on error
      });
  });
}

function convertToBooth(
  boothActiveDayStr: string,
  boothListStr: string,
): Booth {
  return {
    activeDay: convertToBoothActiveDay(boothActiveDayStr),
    boothNumberList: convertToBoothNumberList(boothListStr),
  };
}

function convertToBoothActiveDay(boothActiveDayStr: string): BoothActiveDay {
  switch (boothActiveDayStr) {
    case "1":
      return BoothActiveDay.day1;
    case "2":
      return BoothActiveDay.day2;
    case "3":
      return BoothActiveDay.day3;
    default:
      throw Error(`Unexpected boothActiveDayStr [${boothActiveDayStr}].`);
  }
}

function convertToBoothNumberList(boothListStr: string): Array<BoothNumber> {
  return boothListStr.split(",").map((rawBoothNumber: string) => {
    if (rawBoothNumber.length !== 3) {
      throw Error(`Invalid rawBoothNumber [${rawBoothNumber}].`);
    }

    // Example: rawBoothNumber [A01] => row [A], num [01]
    const row: string = rawBoothNumber.substring(0, 1);
    const num: string = rawBoothNumber.substring(1, 3);

    // TODO: use a more strict parsing strategy
    return { row: row, number: parseInt(num, 10) } as BoothNumber;
  });
}

function addBoothToGroupDataByGroupId(
  groupData: Array<GroupData>,
  groupName: string,
  newBooth: Booth,
): Array<GroupData> {
  return groupData.map(
    (group) =>
      group.groupName === groupName
        ? { ...group, boothList: group.boothList.concat(newBooth) } // Add new Booth with existing GroupData
        : group, // Keep the other groups unchanged
  );
}
