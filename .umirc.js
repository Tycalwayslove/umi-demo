export default { 
  plugins:[
    ['umi-plugin-react',{
      dva:{
        immer:true,
      },
      antd:true,
      routes:{
        exclude:[/models\//],
      },
      library:'react',
      dynamicImport:{
        webpackChunkName:true,
        // loadingComponent:'./components/Loading.js',
      },
      dll:{
        exclude:[]
      },
    }]
  ]
}