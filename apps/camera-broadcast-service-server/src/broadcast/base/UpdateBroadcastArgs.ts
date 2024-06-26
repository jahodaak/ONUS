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
import { BroadcastWhereUniqueInput } from "./BroadcastWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BroadcastUpdateInput } from "./BroadcastUpdateInput";

@ArgsType()
class UpdateBroadcastArgs {
  @ApiProperty({
    required: true,
    type: () => BroadcastWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BroadcastWhereUniqueInput)
  @Field(() => BroadcastWhereUniqueInput, { nullable: false })
  where!: BroadcastWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BroadcastUpdateInput,
  })
  @ValidateNested()
  @Type(() => BroadcastUpdateInput)
  @Field(() => BroadcastUpdateInput, { nullable: false })
  data!: BroadcastUpdateInput;
}

export { UpdateBroadcastArgs as UpdateBroadcastArgs };
