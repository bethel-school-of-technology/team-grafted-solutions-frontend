    export interface Music {
        external_urls: ExternalUrls
        followers: Followers
        genres: string[]
        href: string
        id: string
        images: Image[]
        name: string
        popularity: number
        type: string
        uri: string
        artists : string
        preview_url: string
        url: string
      }
      
      export interface ExternalUrls {
        spotify: string
        href:string
      }
      
      export interface Followers {
        href: any
        total: number
      }
      
      export interface Image {
        height: number
        url: string
        width: number
      }
    
   