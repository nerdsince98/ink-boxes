#[ink::trait_definition]
pub trait TraitDefinition {
    const CONST: bool;

    #[ink(message)]
    fn message(&self);
}

fn main() {}
