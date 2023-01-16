import { Field, Float, InputType} from "type-graphql";

import {IsLatitude, IsLongitude} from "class-validator";

@InputType("Coordinates", {
  isAbstract: true
})
export class Coordinates {
  
  @IsLatitude({message: "must be a latitude"})
  @Field(_type => Float, {
    nullable: false
  })
  lat!: number;

  @IsLongitude({message: "must be a longitude"})
  @Field(_type => Float, {
    nullable: false
  })
  lng!: number;
}
