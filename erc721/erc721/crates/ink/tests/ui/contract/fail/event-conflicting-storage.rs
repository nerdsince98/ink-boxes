#[ink::contract]
mod contract {
    #[ink(storage)]
    pub struct Contract {}

    #[ink(event)]
    #[ink(storage)]
    pub struct Event {}

    impl Contract {
        #[ink(constructor)]
        pub fn constructor() -> Self {
            Self {}
        }

        #[ink(message)]
        pub fn message(&self) {}
    }
}

fn main() {}
