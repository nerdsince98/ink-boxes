#[ink::trait_definition]
pub trait TraitDefinition {
    #[ink(message, selector = true)]
    fn message(&self);
}

fn main() {}
