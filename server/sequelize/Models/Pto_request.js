const { DataTypes } = require('sequelize');

const schema = {
    employeeId : {
        type: DataTypes.BIGINT,
    },
    companyId : {
        type: DataTypes.BIGINT,
    },
    pto_id : {
        type: DataTypes.BIGINT,
        primaryKey: true,
    },
    type: {
        type: DataTypes.STRING,
    },
    start_date : {
        type: DataTypes.DATE,
    },
    end_date : {
        type: DataTypes.DATE,
    },
    notes : {
        type: DataTypes.STRING,
    },
    date_created : {
        type: DataTypes.DATE,
    },
    completion : {
        type: DataTypes.BOOLEAN,
    },
    approve_deny : {
        type: DataTypes.BOOLEAN,
    },
    sent_from : {
        type: DataTypes.BIGINT,
    },
};

module.exports = ['pto_request',schema];