<?php

namespace Database\Factories;

use App\Models\Users;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UsersFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Users::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => (string) Str::uuid(),
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt('password'), // password
            'nama_user' => $this->faker->name,
            'telephone' => $this->faker->phoneNumber,
            'is_member' => $this->faker->boolean,
            'role' => $this->faker->randomElement(['customer', 'admin']),
        ];
    }
}
