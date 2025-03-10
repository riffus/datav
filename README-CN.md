<p align="center">
  <img src="https://datav.io/logo.png" alt="datav-logo" width="80" />
</p>


<p align="center">
  为 APM 和可观测性量身打造的现代化数据可视平台, 100% 真正开源 - Apache2.0 协议
</px>

<p align="center">
    <img alt="License" src="https://img.shields.io/badge/license-Apache2.0-brightgreen"> 
    <a href="https://datav.io"><img alt="Website" src="https://img.shields.io/badge/官网-datav.io-blue"></a>
    <a href="https://play.datav.io"><img alt="Online demo" src="https://img.shields.io/badge/在线-demo-blue"></a>
</p>


<div>
  <table>
      <tr>
          <td align="center">
               <img src="https://github.com/data-observe/assets/blob/main/datav-readme/home-example1.jpg?raw=true" width="500px" />
          </td>
          <td align="center">
                <img src="https://github.com/data-observe/assets/blob/main/datav-readme/white-host.jpg?raw=true" width="500px" />
          </td>
      </tr>
  </table>
   <p align="center">
        <a href="./README.md">English</a> | 简体中文
  </p>
</div>
  
  
## 关于 Datav

Datav 是一个现代化的数据可视化平台，构建于 2023 年，可以对 Metrics, Traces 和 Logs 数据进行深度可视化和交互操作。

**你可以基于 Datav 打造任何你想要的监控平台 UI，如果不行，请提 issue，我们加急支持**。

大家可能会好奇 Datav 和 Grafana 有何区别，简单来说：Datav 专注于可观测性和 APM 领域，而 Grafana 则是一个通用的数据可视化平台。

## 快速开始 & 文档

文档地址： [datav.io/docs](https://datav.io/docs).

同时大家也可以试试在线 Demo:  [play.datav.io](https://play.datav.io).

## 对比 Grafana

虽然 Grafana 是一款伟大的产品，也是目前世界上最流行的图表平台，但是 Datav 依然有自己的优势。

例如 **Datav 的文档和产品很好的支持了中文**，非常适合国内用户的使用，同时还有以下特点：

1. **对可观测性和 APM 的原生支持**
  
 - **内置精心打造的 Metrics, Traces 和 Logs 图表**，相比起 Grafana，它们更加强大，甚至强大的多
 - **支持漂亮的数据大屏**, 领导和老板的最爱
 - **自定义侧边菜单栏** , Grafana 的菜单栏是固定的，你无法打造像内部监控平台那样的导航菜单栏，而 Datav 则给予您充分的选择，甚至还可以为不同的团队打造不同的侧边菜单栏!
 - **全局变量**，对于监控平台而言，全局变量是很重要的，当你选择好环境、应用、主机后，你肯定希望在不同的页面浏览时，这些变量是保持一致的，也就是：一处选择，处处生效
 - **内置通用的 HTTP 数据源和 Echarts 图表**，使用它们，可以实现几乎任何类型的数据可视化需求
 - **强大的数据转换功能**，很多时候，数据并不能在后端就完成转换，而 Datav 提供了强大的数据转换功能，从后端查询到的数据可以转换成任何你想要的格式和形式


    总之，**使用 Datav，您可以打造任何形式的 APM 监控 UI**，我们提供了所需的几乎所有特性。
 
    作为对比，Grafana 更像一个通用的图表平台，在监控领域内，还是缺失了很多特性

2. **功能和 Bug 的快速响应和迭代开发**

    Grafana 受制于商业产品线、复杂的代码和冗长的流程，很多特性功能需要几年时间才能被响应，而 Datav 不会，只要需求合理，我们随时支持

3. **丰富的图表设置选项**
    
     Grafana 的主要图表，设置选项还算可以，但是 Datav 拥有更加强大的图表定制能力，你几乎可以控制图表的任何一个方面，实现自己想要的效果
   
4. **强大的可交互性**

     作为监控平台，下钻和关联查询是必不可少的，Datav 为此提供了可自定义的交互性，几乎所有图表类型都可以实现任何形式的互动关联，例如以下视频所演示的从 Metrics -> Trace -> Logs -> Traces 的下钻交互：

https://github.com/data-observe/datav/assets/7036754/524d2905-ba51-4ba6-b808-aceaf3a52682

5. **极为出色的性能和用户体验**
   
   相比起 Grafana，Datav 拥有非常简洁的代码库和架构设计，而且只用到了 React.js 和 Vite.js ，因此天生就具备高性能基础，而且 Datav 还做了大量的优化以提升最终用户体验。


   当然，用户体验还包含了开发者体验，我很负责的说：**Datav 的二次开发难度远远低于 Grafana**, 如果你看过 Grafana 的代码，就会明白我的意思。
   
6. **漂亮且可自定义的 UI**

    Datav 作为一款新产品，我们可以从零构建现代化的 UI 体验。

    同时，您还可以自定义仪表盘和图表的样式，打造更加好看的首页大屏，至少老板肯定会喜欢 ：)

7.  **真正的开源协议**

    相比 Grafana 的 AGPL3.0, Datav 采用了 Apache2.0 协议，对商业产品要更加友好。

    我们郑重承诺: **未来也不会修改开源协议，Datav 将永远做到真正的 100% 开源r**!

8.  **完美支持手机端使用**
   
    总有些时候，大家需要在公司内网之外的环境访问监控平台，因此支持手机操作是必不可少的


## 示例图片

<img src="https://github.com/data-observe/assets/blob/main/datav-readme/home-example1.jpg?raw=true" />

<img src="https://github.com/data-observe/assets/blob/main/datav-readme/runtime-example.jpg?raw=true" />

<img src="https://github.com/data-observe/assets/blob/main/datav-readme/host-example.jpg?raw=true" />

<img src="https://github.com/data-observe/assets/blob/main/datav-readme/trace-search-example.jpg?raw=true" />

<img src="https://github.com/data-observe/assets/blob/main/datav-readme/trace-example.jpg?raw=true" />

<img src="https://github.com/data-observe/assets/blob/main/datav-readme/log-example.jpg?raw=true" />

<img src="https://github.com/data-observe/assets/blob/main/datav-readme/alert-example.jpg?raw=true" />

