import rawFf44GroupData from '../../generated-data/FF44/group-data.json';
import { BoothActiveDay } from '../types/BoothActiveDay';
import { BoothData, BoothDataOnMap } from '../types/BoothData';
import { Filter } from '../types/Filter';
import { GroupData } from '../types/GroupData';
import { boothNumberListToTargetingBoxDimension } from '../utils/BoothNumberUtils';
import { defined } from '../utils/TypeUtils';

// The data should be validated in test (DO NOT use `as Array<GroupData>` in any other places)
export const FF44_GROUP_DATA: Array<GroupData> =
  rawFf44GroupData as Array<GroupData>;

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

export function searchByGroupName(searchGroupName: string): Array<GroupData> {
  const lowerCaseSearchGroupName = searchGroupName.toLowerCase();
  return FF44_GROUP_DATA.filter((e) =>
    e.groupName.toLowerCase().includes(lowerCaseSearchGroupName),
  );
}
