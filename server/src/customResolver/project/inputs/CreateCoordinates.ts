import { Field, Float, InputType} from "type-graphql";

import {IsLatitude, IsLongitude, IsNotEmpty} from "class-validator";

@InputType("Coordinates", {
  isAbstract: true
})
export class Coordinates {
  
  @IsNotEmpty()
  @IsLatitude({message: "must be a latitude"})
  @Field(_type => Float, {
    nullable: false
  })
  lat!: number;

  @IsNotEmpty()
  @IsLongitude({message: "must be a longitude"})
  @Field(_type => Float, {
    nullable: false
  })
  lng!: number;
}
