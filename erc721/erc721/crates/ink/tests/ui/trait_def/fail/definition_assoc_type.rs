#[ink::trait_definition]
pub trait TraitDefinition {
    type Type;

    #[ink(message)]
    fn message(&self);
}

fn main() {}
