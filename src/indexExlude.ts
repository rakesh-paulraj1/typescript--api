type EventType = 'click' | 'scroll' | 'mousemove';
type ExludeEvent=Exclude<EventType,'scroll'>;

const handleEvent=(event:ExludeEvent) =>{
    console.log(`Handle event :${event}`);
};
handleEvent('click');