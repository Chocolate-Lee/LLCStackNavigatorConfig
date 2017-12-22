


/** LLCStackNavigatorConfig
* version: 0.1
* author: 李超
* 2017/12/22
*
* 使用:
* 1.适用于 StackNavigator, 引入后传入StackNavigator()的第二个参数
* 2.调用跳转方法时可传入参数:
*   comefrom  跳转动画 (默认从右侧入场, 'right':从右侧入场, 'bottom':从底部入场, 'left':从左侧入场, 'top':从顶部入场)
*   isfade    是否渐入 (默认不渐入, true: 渐入, false: 渐入)
*
* 注意:
* 1.默认隐藏导航栏, 建议自定义导航栏, 否则导航栏不支持left, top, bottom动画
* 2.各界面可自定义navigationOptions属性, 会覆盖本设置
* 3.引入时可直接修改相应属性, 再传递给StackNavigator()
* 
*/
export const LLCStackNavigatorConfig = {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: true,
  },
  transitionConfig: () => ({

    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { route, index } = scene;

      const params = route.params || {};
      const comefrom = params.comefrom || 'right';
      const isfade = params.isfade || false;

      const width = layout.initWidth;
      const height = layout.initHeight;


      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      const widthTransform = {};
      if (isfade == true) {
        widthTransform.opacity = opacity;
      }

      switch (comefrom){
        case 'left':
        {
          let translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [-width, 0, 0],
          });

          widthTransform.transform = [{ translateX }];
          return widthTransform;
        }
        case 'right':
        {
          let translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [width, 0, 0],
          });

          widthTransform.transform = [{ translateX }];
          return widthTransform;
        }
        case 'top':
        {
          let translateY = position.interpolate({
            inputRange: [index - 1, index, index + 1], 
            outputRange: [-height, 0, 0],
          });

          widthTransform.transform = [{ translateY }];
          return widthTransform;
        }
        case 'bottom':
        {
          let translateY = position.interpolate({
            inputRange: [index - 1, index, index + 1], 
            outputRange: [height, 0, 0],
          });

          widthTransform.transform = [{ translateY }];
          return widthTransform;
        }
        default:
        {
          let translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [width, 0, 0],
          });

          widthTransform.transform = [{ translateX }];
          return widthTransform;
        }
      }
    },
  }),
};







