import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityProjectOrderByWithRelationInput } from "../../../inputs/CityProjectOrderByWithRelationInput";
import { CityProjectWhereInput } from "../../../inputs/CityProjectWhereInput";
import { CityProjectWhereUniqueInput } from "../../../inputs/CityProjectWhereUniqueInput";
import { CityProjectScalarFieldEnum } from "../../../../enums/CityProjectScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCityProjectArgs {
  @TypeGraphQL.Field(_type => CityProjectWhereInput, {
    nullable: true
  })
  where?: CityProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CityProjectOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CityProjectOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CityProjectWhereUniqueInput, {
    nullable: true
  })
  cursor?: CityProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CityProjectScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"project_id" | "project_name" | "contractor_name" | "date_started" | "date_ended" | "source_fund" | "project_ammount" | "contract_ammount" | "reports_id"> | undefined;
}
