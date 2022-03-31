
const DatabaseService = require('./DatabaseService')
const AuthService = require('./AuthService')
const UsersService = require('./UsersService')
const ComicsService = require('./ComicsService')

class ServiceFactory {
  static getServices () {
    return {
      users: {
        serviceClass: UsersService,
        models: ['User']
      },
      auth: {
        serviceClass: AuthService
      }, 
      comics: { 
        serviceClass: ComicsService,
        models: ['Comic']
      }
    }
  }
  static async getService (serviceName) {
    const serviceConfig = this.getServices()[serviceName]
    if (!serviceConfig) throw new Error(`Unable to resolve configuration for service ${serviceName}`)

    const service = new serviceConfig.serviceClass(ServiceFactory)

    if (Array.isArray(serviceConfig.models)) {
      for (const modelName of serviceConfig.models) {
        const model = await DatabaseService.getModel(modelName)
        service.setModel(model)
      }
    }

    return service
  }

}

module.exports = ServiceFactory
