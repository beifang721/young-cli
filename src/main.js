const program = require("commander");
const { version } = require("./constants");
const path = require('path');

const mapActions = {
  create: {
    alias: "c",
    description:'创建一个项目',
    examples:[
      'young-cli create <project-name>'
    ]
  },
  config: {
    alias: "conf",
    description:'配置项目变量',
    examples:[
      'young-cli config set <k> <v>',
      'young-cli config get <k>'
    ]
  },
  "*": {
    alias: "",
    description:'command not found',
    examples:[]
  }
}

for (const key in mapActions) {
  const { alias, description } = mapActions[key];
  program
  .command(key)
  .alias(alias)
  .description(description)
  .action((source, destination) => { //要执行的动作
    if (key === '*') {
      console.log(description);
    }else{
      console.log(process.argv, 'xxx');
      require(path.resolve(__dirname, key))(...process.argv.slice(3));
    }
  });
}


program.version(version);
program.option('-d, --debug','output extra debugg');


program.on('--help', function (operands) {
  console.log('\nExamples:');
  for (const key in mapActions) {
    mapActions[key].examples.forEach(example=>{
      console.log(` ${example}`);
    })
  }
});
program.parse(process.argv);

