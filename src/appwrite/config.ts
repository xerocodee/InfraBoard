import conf from '@/conf/config'
import { Client, Account, ID, Databases } from 'appwrite'

type CreateUserAccount = {
  email: string
  password: string
  name: string
}

type LoginUserAccount = {
  email: string
  password: string
}

type VerifyUserParams = {
  userId: string
  secret: string
}

const appwriteClient = new Client()

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)

export const account = new Account(appwriteClient)
export const database = new Databases(appwriteClient)

export class AppwriteService {
  //create a new record of user inside appwrite
  async createUserAccount({ email, password, name }: CreateUserAccount) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name,
      )
      if (userAccount) {
        return this.login({ email, password })
      } else {
        return userAccount
      }
    } catch (error: any) {
      throw error
    }
  }
  //store user details in appwrite database
  async createDatabaseAccount({ email, password, name }: CreateUserAccount) {
    try {
      const userDetails = await database.createDocument(
        conf.appwriteDbId,
        conf.appwriteCollectionId,
        'unique()',
        {
          email,
          password,
          name,
        },
      )
      if (userDetails) {
        return this.login({ email, password })
      } else {
        return userDetails
      }
    } catch (error: any) {
      throw error
    }
  }

  async login({ email, password }: LoginUserAccount) {
    try {
      return await account.createEmailSession(email, password)
    } catch (error: any) {
      throw error
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser()
      return Boolean(data)
    } catch (error) {}

    return false
  }

  async getCurrentUser() {
    try {
      return account.get()
    } catch (error) {
      console.log('getcurrentUser error: ' + error)
    }

    return null
  }

  async logout() {
    try {
      return await account.deleteSession('current')
    } catch (error) {
      console.log('logout error: ' + error)
    }
  }

  //email verification
  async createVerification() {
    try {
      console.log('createVerification success')
      return await account.createVerification(
        'http://localhost:3000/verifyEmail',
      )
    } catch (error) {
      console.log('createVerification error: ' + error)
    }
  }

  async verifyUser({ userId, secret }: VerifyUserParams) {
    try {
      console.log('verifyUser success')
      return await account.updateVerification(userId, secret)
    } catch (error) {
      console.log('verifyUser error: ' + error)
    }
  }

  //password reset
  async passwordRecovery(email: string) {
    try {
      console.log('createRecovery success')
      return await account.createRecovery(
        email,
        'http://localhost:3000/reset-password',
      )
    } catch (error) {
      console.log('createRecovery error: ' + error)
    }
  }

  async resetPassword(
    userId: string,
    secret: string,
    password: string,
    confirmPassword: string,
  ) {
    try {
      console.log('updateRecovery success')
      return await account.updateRecovery(
        userId,
        secret,
        password,
        confirmPassword,
      )
    } catch (error) {
      console.log('updateRecovery error: ' + error)
    }
  }
}

const appwriteService = new AppwriteService()

export default appwriteService
