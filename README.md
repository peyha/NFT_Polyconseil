# NFT_Polyconseil

Voici le dépôt git qui constitue le livrable de la mission Xprojet
Il permet la création de NFT en respectant les standards ERC721 avec l'implémentation sécurisée d'Openzeppelin

Ce smart contract a été déployée sur le testnet rinkeby et peut être déployé sur le mainnet

Les fonctions à utiliser sont disponibles sur https://docs.openzeppelin.com/contracts/2.x/api/token/erc721

Le NFT est caractérisé par trois champs à définir dans migrations/2_deploy.js :
- le nom du NFT
- le symbole du NFT (sigle)
- le baseURI (url qui pointe vers un json par exemple https://my-json-server.typicode.com/abcoathup/samplenft/tokens/ sachant que le NFT d'identifiant id aura pour tokenURI https://my-json-server.typicode.com/abcoathup/samplenft/tokens/{id})



