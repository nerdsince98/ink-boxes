#[ink::trait_definition]
pub trait TraitDefinition {
    #[ink(message)]
    fn message(this: Self);
}

fn main() {}
