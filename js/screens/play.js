game.PlayScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
		// reset the score
		game.data.score = 0;

		me.levelDirector.loadLevel("area01");
		
		// add our HUD to the game world	
		me.game.add(new game.HUD.Container());
		// ??? me.game.addHUD(0, 430, 640, 60);
		// me.game.HUD.addItem("score", new game.ScoreObject(620, 10));

		me.game.sort();
	},
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.disableHUD();
		//me.game.world.removeChild(me.game.world.getEntityByProp("name", "HUD")[0]);
	}
});
