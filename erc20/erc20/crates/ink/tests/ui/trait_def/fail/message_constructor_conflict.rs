#[ink::trait_definition]
pub trait TraitDefinition {
    #[ink(message, constructor)]
    fn message(&self);
}

fn main() {}
