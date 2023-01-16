import { IsLatLong, IsNotEmpty, ValidateNested } from "class-validator";
import { Field, InputType } from "type-graphql";
import { Coordinates } from "./CreateCoordinates";



@InputType("Location", {
  isAbstract: true
})
export class Location {

  @ValidateNested()
  @Field(_type => Coordinates, {
    nullable: false
  })
  origin!: Coordinates;
  
  @ValidateNested()
  @Field(_type => Coordinates, {
    nullable: false
  })
  destination!: Coordinates;
}
