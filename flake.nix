{
  description = "eslint-config-lichthagel";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-23.11";
  };

  outputs =
    { nixpkgs, ... }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aaarch64-darwin"
      ];
      eachSystems =
        f:
        nixpkgs.lib.genAttrs systems (
          system:
          f {
            inherit system;
            pkgs = nixpkgs.legacyPackages.${system};
          }
        );
    in
    {
      devShells = eachSystems (
        { pkgs, ... }:
        {
          default = pkgs.mkShell {
            name = "eslint-config-lichthagel";

            packages = with pkgs; [
              nodejs
              nodePackages.pnpm
            ];
          };
        }
      );
    };
}
