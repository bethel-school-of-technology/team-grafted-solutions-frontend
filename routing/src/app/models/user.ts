// export class User {
//     export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>>{
//         declare username: string;
//         declare email: string;
//         declare display_name: string;
//         declare createdAt?: Date;
//         declare updatedAt?: Date;
//     }
    
//     export function UserFactory(sequelize: Sequelize) {
//      User.init({
//          username: {
//              type: DataTypes.STRING,
//              allowNull: false,
//              unique: true,
//              primaryKey: true
//          },
//          email: {
//              type: DataTypes.STRING,
//              allowNull: false,
//          },
//          display_name: {
//              type: DataTypes.STRING,
//              allowNull: false,
//          },
//          createdAt: {
//              type: DataTypes.DATE,
//              allowNull: false,
//              defaultValue: DataTypes.NOW,
//          },
//          updatedAt: {
//              type: DataTypes.DATE,
//              allowNull: false,
//              defaultValue: DataTypes.NOW,
//          }
//      }, {
//          tableName: 'users',
//          freezeTableName: true,
//          sequelize
//      });
    
// }
