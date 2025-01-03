import { BoothActiveDay } from "../types/BoothActiveDay";
import { BoothData, BoothDataOnMap } from "../types/BoothData";
import { Filter } from "../types/Filter";
import { GroupData } from "../types/GroupData";
import { boothNumberListToTargetingBoxDimension } from "../utils/BoothNumberUtils";
import { defined } from "../utils/TypeUtils";
import { FF44_GROUP_DATA_DAY_1_ROW_A } from "./ff44/day1/Ff44GroupDataDay1RowA";
import { FF44_GROUP_DATA_DAY_1_ROW_B } from "./ff44/day1/Ff44GroupDataDay1RowB";
import { FF44_GROUP_DATA_DAY_1_ROW_C } from "./ff44/day1/Ff44GroupDataDay1RowC";
import { FF44_GROUP_DATA_DAY_1_ROW_D } from "./ff44/day1/Ff44GroupDataDay1RowD";
import { FF44_GROUP_DATA_DAY_1_ROW_E } from "./ff44/day1/Ff44GroupDataDay1RowE";
import { FF44_GROUP_DATA_DAY_1_ROW_F } from "./ff44/day1/Ff44GroupDataDay1RowF";
import { FF44_GROUP_DATA_DAY_1_ROW_G } from "./ff44/day1/Ff44GroupDataDay1RowG";
import { FF44_GROUP_DATA_DAY_1_ROW_H } from "./ff44/day1/Ff44GroupDataDay1RowH";
import { FF44_GROUP_DATA_DAY_1_ROW_I } from "./ff44/day1/Ff44GroupDataDay1RowI";
import { FF44_GROUP_DATA_DAY_1_ROW_J } from "./ff44/day1/Ff44GroupDataDay1RowJ";
import { FF44_GROUP_DATA_DAY_1_ROW_K } from "./ff44/day1/Ff44GroupDataDay1RowK";
import { FF44_GROUP_DATA_DAY_1_ROW_L } from "./ff44/day1/Ff44GroupDataDay1RowL";
import { FF44_GROUP_DATA_DAY_1_ROW_M } from "./ff44/day1/Ff44GroupDataDay1RowM";
import { FF44_GROUP_DATA_DAY_1_ROW_N } from "./ff44/day1/Ff44GroupDataDay1RowN";
import { FF44_GROUP_DATA_DAY_1_ROW_O } from "./ff44/day1/Ff44GroupDataDay1RowO";
import { FF44_GROUP_DATA_DAY_1_ROW_P } from "./ff44/day1/Ff44GroupDataDay1RowP";
import { FF44_GROUP_DATA_DAY_1_ROW_Q } from "./ff44/day1/Ff44GroupDataDay1RowQ";
import { FF44_GROUP_DATA_DAY_1_ROW_R } from "./ff44/day1/Ff44GroupDataDay1RowR";
import { FF44_GROUP_DATA_DAY_1_ROW_S } from "./ff44/day1/Ff44GroupDataDay1RowS";
import { FF44_GROUP_DATA_DAY_1_ROW_T } from "./ff44/day1/Ff44GroupDataDay1RowT";
import { FF44_GROUP_DATA_DAY_1_ROW_U } from "./ff44/day1/Ff44GroupDataDay1RowU";
import { FF44_GROUP_DATA_DAY_1_ROW_W } from "./ff44/day1/Ff44GroupDataDay1RowW";
import { FF44_GROUP_DATA_DAY_2_ROW_A } from "./ff44/day2/Ff44GroupDataDay2RowA";
import { FF44_GROUP_DATA_DAY_2_ROW_B } from "./ff44/day2/Ff44GroupDataDay2RowB";
import { FF44_GROUP_DATA_DAY_2_ROW_C } from "./ff44/day2/Ff44GroupDataDay2RowC";
import { FF44_GROUP_DATA_DAY_2_ROW_D } from "./ff44/day2/Ff44GroupDataDay2RowD";
import { FF44_GROUP_DATA_DAY_2_ROW_E } from "./ff44/day2/Ff44GroupDataDay2RowE";
import { FF44_GROUP_DATA_DAY_2_ROW_F } from "./ff44/day2/Ff44GroupDataDay2RowF";
import { FF44_GROUP_DATA_DAY_2_ROW_G } from "./ff44/day2/Ff44GroupDataDay2RowG";
import { FF44_GROUP_DATA_DAY_2_ROW_H } from "./ff44/day2/Ff44GroupDataDay2RowH";
import { FF44_GROUP_DATA_DAY_2_ROW_I } from "./ff44/day2/Ff44GroupDataDay2RowI";
import { FF44_GROUP_DATA_DAY_2_ROW_J } from "./ff44/day2/Ff44GroupDataDay2RowJ";
import { FF44_GROUP_DATA_DAY_2_ROW_K } from "./ff44/day2/Ff44GroupDataDay2RowK";
import { FF44_GROUP_DATA_DAY_2_ROW_L } from "./ff44/day2/Ff44GroupDataDay2RowL";
import { FF44_GROUP_DATA_DAY_2_ROW_M } from "./ff44/day2/Ff44GroupDataDay2RowM";
import { FF44_GROUP_DATA_DAY_2_ROW_N } from "./ff44/day2/Ff44GroupDataDay2RowN";
import { FF44_GROUP_DATA_DAY_2_ROW_O } from "./ff44/day2/Ff44GroupDataDay2RowO";
import { FF44_GROUP_DATA_DAY_2_ROW_P } from "./ff44/day2/Ff44GroupDataDay2RowP";
import { FF44_GROUP_DATA_DAY_2_ROW_Q } from "./ff44/day2/Ff44GroupDataDay2RowQ";
import { FF44_GROUP_DATA_DAY_2_ROW_R } from "./ff44/day2/Ff44GroupDataDay2RowR";
import { FF44_GROUP_DATA_DAY_2_ROW_S } from "./ff44/day2/Ff44GroupDataDay2RowS";
import { FF44_GROUP_DATA_DAY_2_ROW_T } from "./ff44/day2/Ff44GroupDataDay2RowT";
import { FF44_GROUP_DATA_DAY_2_ROW_U } from "./ff44/day2/Ff44GroupDataDay2RowU";
import { FF44_GROUP_DATA_DAY_2_ROW_W } from "./ff44/day2/Ff44GroupDataDay2RowW";
import { FF44_GROUP_DATA_DAY_3_ROW_A } from "./ff44/day3/Ff44GroupDataDay3RowA";
import { FF44_GROUP_DATA_DAY_3_ROW_B } from "./ff44/day3/Ff44GroupDataDay3RowB";
import { FF44_GROUP_DATA_DAY_3_ROW_C } from "./ff44/day3/Ff44GroupDataDay3RowC";
import { FF44_GROUP_DATA_DAY_3_ROW_D } from "./ff44/day3/Ff44GroupDataDay3RowD";
import { FF44_GROUP_DATA_DAY_3_ROW_E } from "./ff44/day3/Ff44GroupDataDay3RowE";
import { FF44_GROUP_DATA_DAY_3_ROW_F } from "./ff44/day3/Ff44GroupDataDay3RowF";
import { FF44_GROUP_DATA_DAY_3_ROW_G } from "./ff44/day3/Ff44GroupDataDay3RowG";
import { FF44_GROUP_DATA_DAY_3_ROW_H } from "./ff44/day3/Ff44GroupDataDay3RowH";
import { FF44_GROUP_DATA_DAY_3_ROW_I } from "./ff44/day3/Ff44GroupDataDay3RowI";
import { FF44_GROUP_DATA_DAY_3_ROW_J } from "./ff44/day3/Ff44GroupDataDay3RowJ";
import { FF44_GROUP_DATA_DAY_3_ROW_K } from "./ff44/day3/Ff44GroupDataDay3RowK";
import { FF44_GROUP_DATA_DAY_3_ROW_L } from "./ff44/day3/Ff44GroupDataDay3RowL";
import { FF44_GROUP_DATA_DAY_3_ROW_M } from "./ff44/day3/Ff44GroupDataDay3RowM";
import { FF44_GROUP_DATA_DAY_3_ROW_N } from "./ff44/day3/Ff44GroupDataDay3RowN";
import { FF44_GROUP_DATA_DAY_3_ROW_O } from "./ff44/day3/Ff44GroupDataDay3RowO";
import { FF44_GROUP_DATA_DAY_3_ROW_P } from "./ff44/day3/Ff44GroupDataDay3RowP";
import { FF44_GROUP_DATA_DAY_3_ROW_Q } from "./ff44/day3/Ff44GroupDataDay3RowQ";
import { FF44_GROUP_DATA_DAY_3_ROW_R } from "./ff44/day3/Ff44GroupDataDay3RowR";
import { FF44_GROUP_DATA_DAY_3_ROW_S } from "./ff44/day3/Ff44GroupDataDay3RowS";
import { FF44_GROUP_DATA_DAY_3_ROW_T } from "./ff44/day3/Ff44GroupDataDay3RowT";
import { FF44_GROUP_DATA_DAY_3_ROW_U } from "./ff44/day3/Ff44GroupDataDay3RowU";
import { FF44_GROUP_DATA_DAY_3_ROW_W } from "./ff44/day3/Ff44GroupDataDay3RowW";

export const FF44_GROUP_DATA: Array<GroupData> = (
  [] as Array<GroupData>
).concat(
  FF44_GROUP_DATA_DAY_1_ROW_A,
  FF44_GROUP_DATA_DAY_1_ROW_B,
  FF44_GROUP_DATA_DAY_1_ROW_C,
  FF44_GROUP_DATA_DAY_1_ROW_D,
  FF44_GROUP_DATA_DAY_1_ROW_E,
  FF44_GROUP_DATA_DAY_1_ROW_F,
  FF44_GROUP_DATA_DAY_1_ROW_G,
  FF44_GROUP_DATA_DAY_1_ROW_H,
  FF44_GROUP_DATA_DAY_1_ROW_I,
  FF44_GROUP_DATA_DAY_1_ROW_J,
  FF44_GROUP_DATA_DAY_1_ROW_K,
  FF44_GROUP_DATA_DAY_1_ROW_L,
  FF44_GROUP_DATA_DAY_1_ROW_M,
  FF44_GROUP_DATA_DAY_1_ROW_N,
  FF44_GROUP_DATA_DAY_1_ROW_O,
  FF44_GROUP_DATA_DAY_1_ROW_P,
  FF44_GROUP_DATA_DAY_1_ROW_Q,
  FF44_GROUP_DATA_DAY_1_ROW_R,
  FF44_GROUP_DATA_DAY_1_ROW_S,
  FF44_GROUP_DATA_DAY_1_ROW_T,
  FF44_GROUP_DATA_DAY_1_ROW_U,
  FF44_GROUP_DATA_DAY_1_ROW_W,
  FF44_GROUP_DATA_DAY_2_ROW_A,
  FF44_GROUP_DATA_DAY_2_ROW_B,
  FF44_GROUP_DATA_DAY_2_ROW_C,
  FF44_GROUP_DATA_DAY_2_ROW_D,
  FF44_GROUP_DATA_DAY_2_ROW_E,
  FF44_GROUP_DATA_DAY_2_ROW_F,
  FF44_GROUP_DATA_DAY_2_ROW_G,
  FF44_GROUP_DATA_DAY_2_ROW_H,
  FF44_GROUP_DATA_DAY_2_ROW_I,
  FF44_GROUP_DATA_DAY_2_ROW_J,
  FF44_GROUP_DATA_DAY_2_ROW_K,
  FF44_GROUP_DATA_DAY_2_ROW_L,
  FF44_GROUP_DATA_DAY_2_ROW_M,
  FF44_GROUP_DATA_DAY_2_ROW_N,
  FF44_GROUP_DATA_DAY_2_ROW_O,
  FF44_GROUP_DATA_DAY_2_ROW_P,
  FF44_GROUP_DATA_DAY_2_ROW_Q,
  FF44_GROUP_DATA_DAY_2_ROW_R,
  FF44_GROUP_DATA_DAY_2_ROW_S,
  FF44_GROUP_DATA_DAY_2_ROW_T,
  FF44_GROUP_DATA_DAY_2_ROW_U,
  FF44_GROUP_DATA_DAY_2_ROW_W,
  FF44_GROUP_DATA_DAY_3_ROW_A,
  FF44_GROUP_DATA_DAY_3_ROW_B,
  FF44_GROUP_DATA_DAY_3_ROW_C,
  FF44_GROUP_DATA_DAY_3_ROW_D,
  FF44_GROUP_DATA_DAY_3_ROW_E,
  FF44_GROUP_DATA_DAY_3_ROW_F,
  FF44_GROUP_DATA_DAY_3_ROW_G,
  FF44_GROUP_DATA_DAY_3_ROW_H,
  FF44_GROUP_DATA_DAY_3_ROW_I,
  FF44_GROUP_DATA_DAY_3_ROW_J,
  FF44_GROUP_DATA_DAY_3_ROW_K,
  FF44_GROUP_DATA_DAY_3_ROW_L,
  FF44_GROUP_DATA_DAY_3_ROW_M,
  FF44_GROUP_DATA_DAY_3_ROW_N,
  FF44_GROUP_DATA_DAY_3_ROW_O,
  FF44_GROUP_DATA_DAY_3_ROW_P,
  FF44_GROUP_DATA_DAY_3_ROW_Q,
  FF44_GROUP_DATA_DAY_3_ROW_R,
  FF44_GROUP_DATA_DAY_3_ROW_S,
  FF44_GROUP_DATA_DAY_3_ROW_T,
  FF44_GROUP_DATA_DAY_3_ROW_U,
  FF44_GROUP_DATA_DAY_3_ROW_W,
);

function getBoothDataListByActiveDay(
  groupDataList: Array<GroupData>,
  boothActiveDay: BoothActiveDay,
): Array<BoothData> {
  return groupDataList
    .filter((groupData) =>
      groupData.boothList.some((booth) => booth.activeDay === boothActiveDay),
    )
    .map((groupData) => {
      return {
        groupId: groupData.groupId,
        groupName: groupData.groupName,
        groupLink: groupData.groupLink,
        booth: defined(
          groupData.boothList.find(
            (booth) => booth.activeDay === boothActiveDay,
          ),
        ),
      };
    });
}

function getGroupDataListWithOnlyOneDay(
  groupDataList: Array<GroupData>,
): Array<GroupData> {
  return groupDataList.filter((groupData) => groupData.boothList.length === 1);
}

function getFf44BoothData(
  boothActiveDay: BoothActiveDay,
  filter: Filter,
): Array<BoothData> {
  switch (filter) {
    case Filter.noFilter:
      return getBoothDataListByActiveDay(FF44_GROUP_DATA, boothActiveDay);
    case Filter.onlyOneDay:
      return getBoothDataListByActiveDay(
        getGroupDataListWithOnlyOneDay(FF44_GROUP_DATA),
        boothActiveDay,
      );
  }
}

export function getFf44BoothDataOnMap(
  boothActiveDay: BoothActiveDay,
  filter: Filter,
): Array<BoothDataOnMap> {
  return getFf44BoothData(boothActiveDay, filter).map((boothData) => {
    return {
      ...boothData,
      dimension: boothNumberListToTargetingBoxDimension(
        boothData.booth.boothNumberList,
      ),
    };
  });
}

export function getGroupDataByGroupId(groupId: string): GroupData {
  return defined(FF44_GROUP_DATA.find((e) => e.groupId === groupId));
}
