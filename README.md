# NFT_Polyconseil

Voici le dépôt git qui constitue le livrable de la mission Xprojet. Il correspond à un build utilisé avec Truffle
Il permet la création de NFT en respectant les standards ERC721 avec l'implémentation sécurisée d'Openzeppelin et le Preset ERC721PresetMinterPauserAutoId qui permet de gérer nos NFTs.

Ce smart contract a été déployé sur le testnet rinkeby (ici https://rinkeby.etherscan.io/address/0x0beD7295F65BCC8431e6DA1C643D778aDa047eaF) et peut être déployé sur le mainnet 

Les fonctions à utiliser sont disponibles sur https://docs.openzeppelin.com/contracts/3.x/api/presets#ERC721PresetMinterPauserAutoId

Le NFT est caractérisé par trois champs à définir dans migrations/2_deploy.js :
- le nom du NFT
- le symbole du NFT (sigle)
- le baseURI (url qui pointe vers un json par exemple https://my-json-server.typicode.com/abcoathup/samplenft/tokens/ sachant que le NFT d'identifiant id aura pour tokenURI https://my-json-server.typicode.com/abcoathup/samplenft/tokens/{id})

Ces NFT permettent:
- les propriétaires peuvent détruire (burn) leurs NFTs
- un rôle de "minter" qui permet de générer les NFTs (par défaut donné au propriétaire du contrat)
- un rôle de "pauser" qui permet de stopper toute transaction entre les NFTs (par défaut donné au propriétaire du contrat)
- autogénération de token id et de token uri

Les fonctions les plus importantes sont
- NFT.pause() pour mettre les transactions en pause
- NFT.unpause() pour permettre les transactions
- NFT.mint(address) pour minter un nft
- 

