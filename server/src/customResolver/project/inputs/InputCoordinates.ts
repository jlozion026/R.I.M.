import { IsLatitude, IsLongitude } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType("Coordinates", {
  isAbstract: true
})
export class Coordinates {

  @IsLatitude({message: "must be a latitude"})
  @Field(_type => String, {
    nullable: false
  })
  lat!: string;

  @IsLongitude({message: "must be a longitude"})
  @Field(_type => String, {
    nullable: false
  })
  lng!: string;
}
