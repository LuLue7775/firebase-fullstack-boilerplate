module.exports = {
  apps: [
      {
          name: 'NextApp',
          exec_mode: 'cluster',
          instances: '1',
          script: './frontend/out/index.html',
          port: 3001
      },
      {
        name: 'admin',
        script: './admin/bin/www',
        instances: '1', //負載平衡模式下的 cpu 數量
        exec_mode : "cluster", // 負載平衡模式
        max_memory_restart: '500M', //緩存了多少記憶體重新整理
        port: 3002, //指定伺服器上的 port
      }
  ]
}
