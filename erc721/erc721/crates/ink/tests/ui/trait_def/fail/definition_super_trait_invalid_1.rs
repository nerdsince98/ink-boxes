pub trait SuperTraitDefinition {}

#[ink::trait_definition]
pub trait TraitDefinition: SuperTraitDefinition {
    #[ink(message)]
    fn message(&self);
}

fn main() {}
