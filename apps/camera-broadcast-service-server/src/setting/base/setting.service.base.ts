/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Setting as PrismaSetting } from "@prisma/client";

export class SettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SettingCountArgs, "select">): Promise<number> {
    return this.prisma.setting.count(args);
  }

  async settings<T extends Prisma.SettingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SettingFindManyArgs>
  ): Promise<PrismaSetting[]> {
    return this.prisma.setting.findMany<Prisma.SettingFindManyArgs>(args);
  }
  async setting<T extends Prisma.SettingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SettingFindUniqueArgs>
  ): Promise<PrismaSetting | null> {
    return this.prisma.setting.findUnique(args);
  }
  async createSetting<T extends Prisma.SettingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SettingCreateArgs>
  ): Promise<PrismaSetting> {
    return this.prisma.setting.create<T>(args);
  }
  async updateSetting<T extends Prisma.SettingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SettingUpdateArgs>
  ): Promise<PrismaSetting> {
    return this.prisma.setting.update<T>(args);
  }
  async deleteSetting<T extends Prisma.SettingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SettingDeleteArgs>
  ): Promise<PrismaSetting> {
    return this.prisma.setting.delete(args);
  }
}
