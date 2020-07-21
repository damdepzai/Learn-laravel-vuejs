<?php

use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
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
        factory(App\Client::class, 50)->create();
    }
}
