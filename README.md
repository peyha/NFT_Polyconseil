# NFT_Polyconseil

Voici le dépôt git qui constitue le livrable de la mission Xprojet. Il correspond à un build utilisé avec Truffle
Il permet la création de NFT en respectant les standards ERC721 avec l'implémentation sécurisée d'Openzeppelin et le Preset ERC721PresetMinterPauserAutoId qui permet de gérer nos NFTs.

N'oubliez pas d'ajouter un fichier .secret avec votre seed (10 mots secrets) pour pouvoir se connecter à la blockchain.

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
- NFT.mint(to) pour minter un nft
- NFT.transferFrom(from, to, tokenId)

Au niveau des gas fee, un mint coute 155313 gas et un transfer coute 37398 gas. Actuellement, un gas coute 58 gwei pour une transaction donc un mint vaut 0.009008154 eth = 30 € et un transfer 7€
LA fonction pause coute 47012 gas et unpause en coute 25089
La fonction burn coute 70163 gas
Le déploiement du contrat coute 2588520 gas donc environ 0.15 eth soit 590€(!!)
