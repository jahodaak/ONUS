/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Stream } from "./Stream";
import { StreamCountArgs } from "./StreamCountArgs";
import { StreamFindManyArgs } from "./StreamFindManyArgs";
import { StreamFindUniqueArgs } from "./StreamFindUniqueArgs";
import { DeleteStreamArgs } from "./DeleteStreamArgs";
import { StreamService } from "../stream.service";
@graphql.Resolver(() => Stream)
export class StreamResolverBase {
  constructor(protected readonly service: StreamService) {}

  async _streamsMeta(
    @graphql.Args() args: StreamCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Stream])
  async streams(@graphql.Args() args: StreamFindManyArgs): Promise<Stream[]> {
    return this.service.streams(args);
  }

  @graphql.Query(() => Stream, { nullable: true })
  async stream(
    @graphql.Args() args: StreamFindUniqueArgs
  ): Promise<Stream | null> {
    const result = await this.service.stream(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Stream)
  async deleteStream(
    @graphql.Args() args: DeleteStreamArgs
  ): Promise<Stream | null> {
    try {
      return await this.service.deleteStream(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
