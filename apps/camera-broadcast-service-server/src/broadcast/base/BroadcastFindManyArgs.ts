/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BroadcastWhereInput } from "./BroadcastWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BroadcastOrderByInput } from "./BroadcastOrderByInput";

@ArgsType()
class BroadcastFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BroadcastWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BroadcastWhereInput, { nullable: true })
  @Type(() => BroadcastWhereInput)
  where?: BroadcastWhereInput;

  @ApiProperty({
    required: false,
    type: [BroadcastOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BroadcastOrderByInput], { nullable: true })
  @Type(() => BroadcastOrderByInput)
  orderBy?: Array<BroadcastOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BroadcastFindManyArgs as BroadcastFindManyArgs };
