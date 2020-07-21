<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::create([
            'name' => 'Dam Nguyen',
            'email' => 'damnv@gmail.com',
            'password' => bcrypt('dam010919')
        ]);
    }
}
