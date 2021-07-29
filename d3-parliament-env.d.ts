declare module 'd3-parliament' {
  interface EnterFunctions {
    smallToBig(boolean): this,
    fromCenter(boolean): this,
  }
  interface ExitFunctions {
    bigToSmall(boolean): this,
    toCenter(boolean): this,
  }
  interface UpdateFunction {
    animate(boolean): this,
  }
  interface CallbackFunction {
    event: Event,
    data: object,
  }
  type EventTypes = "click" | "dblclick" | "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "touchcancel" | "touchend" | "touchmove" | "touchstart";
  interface ParliamentFunctions {
    width(number): this,
    height(number): this,
    innerRadiusCoef(innerRadiusCoef: number): this,
    enter: EnterFunctions,
    exit: ExitFunctions,
    update: UpdateFunctions,
    on(type: EventTypes, callback: (callback: CallbackFunction) => void): void, 
  };
  export default function (d3: any): ParliamentFunctions & d3.SelectionFn;
}