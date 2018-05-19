module.exports.handler = (event, context) => {
  const res = {
    statusCode: 201,
    headers: { 'Access-Control-Allow-Origin': '*' },
  };
  console.log('event', event);
  context.succeed(res);
};
