import { graphQLClient } from "./request";

export class LoopApi {
  static async getRandomLoops(limit: number, collectionSlug: string) {
    return await graphQLClient.request(`
      query getRandomLoops {
        randomLoops(limit: ${limit}, collectionSlug: "${collectionSlug}") {
          uuid
          duration
          files
          series {
            id
            titleJA
            titleROMAJI
            titleEN
            titleCHS
            titleCHT
          }
          episode {
            id
            index
          }
        }
      }
    `)
  }
}