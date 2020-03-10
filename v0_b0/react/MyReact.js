
class MyReact {
		constructor() {}
		
		test() {
			return build.build([
				jsbuild.class("MarkdownEditor extends React.Component",[],[
					jsbuild.method("constructor",["props"],[
						jsbuild.method("super",["props"],[],["  ",3]),
						jsbuild.assign("this.handleChange",jsbuild.method("this.handleChange.bind",["this"],[],["  ",3]) ),
						jsbuild.assign("this.state",jsbuild.json([ "value: 'Ciao, **mondo**!'" ],["  ",3]) ),
					],["  ",2]),
					
					jsbuild.method("handleChange",["e"],[
						jsbuild.method("this.setState",[
							jsbuild.ijson([ "value: e.target.value" ],["  ",3])
						],[],["  ",3]),
					],["  ",2]),
					
					jsbuild.method("getRawMarkup",[""],[
						jsbuild.const("md", "new "+jsbuild.method("Remarkable",[""],[],["  ",3]) ),
						jsbuild.return(jsbuild.ijson([ "__html: "+
							jsbuild.method("md.render",["this.state.value"],[],["  ",3]) ],["  ",3]))
					],["  ",2]),
					
					jsbuild.method("render",[""],[
					],["  ",2]),
				],["  ",1]),
			]);
		}
}
myreact = new MyReact();