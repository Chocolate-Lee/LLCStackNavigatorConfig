# LLCStackNavigatorConfig

# 场景
React Native中的StackNavigator的跳转动画只有默认两个选项，设置后不能根据跳转不同的界面而更改。<br/>

如果有push和modal不同需求的，可以使用本配置方式

# 使用方法
1.适用于 StackNavigator, 引入后传入StackNavigator()的第二个参数<br/>
2.调用跳转方法时可传入参数:<br/>
  comefrom  跳转动画 (默认从右侧入场, 'right':从右侧入场, 'bottom':从底部入场, 'left':从左侧入场, 'top':从顶部入场)<br/>
  isfade    是否渐入 (默认不渐入, true: 渐入, false: 渐入)<br/>
  
# 注意
1.默认隐藏导航栏, 建议自定义导航栏, 否则导航栏不支持left, top, bottom动画<br/>
2.各界面可自定义navigationOptions属性, 会覆盖本设置<br/>
3.引入时可直接修改相应属性, 再传递给StackNavigator()<br/>

# 例子

1.引入<br/>
  import { LLCStackNavigatorConfig } from './LLCNavConfig'<br/>
2.创建StackNavigator并传入<br/>
  const Nav = StackNavigator(RouteConfigs, LLCStackNavigatorConfig);<br/>
3.界面跳转时调用<br/>
  this.props.navigation.navigate('VC', {comefrom: 'left', isfade: true});<br/>

# Demo

1.将本仓库内的App.js文件替换到React Native项目中<br/>
2.将LLCStackNavigatorConfig放在同级目录下，直接运行即可<br/>
