#[ink::trait_definition(keep_attr = true)]
pub trait TraitDefinition {
    #[ink(message)]
    fn message(&self);
}

fn main() {}
