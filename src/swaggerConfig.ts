import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Fleet Management API',
            version: '1.0.0',
            description: 'API documentation for Fleet Management System',
        },
    },
    apis: ['./src/routes/api/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec };