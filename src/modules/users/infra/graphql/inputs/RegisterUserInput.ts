import { InputType, Field } from 'type-graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
class RegisterUserInput {
  @Field(() => String, { nullable: true })
  legal_registry_number: string;

  @Field(() => String)
  @IsEmail()
  @IsNotEmpty({ message: 'You must provide a valid email.' })
  email: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  @IsNotEmpty({ message: 'You must provide a valid password.' })
  password: string;

  @Field(() => String, { nullable: true })
  phone: string;
}

export { RegisterUserInput };