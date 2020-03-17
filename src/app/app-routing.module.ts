import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "player", pathMatch: "full" },
  {
    path: "player",
    loadChildren: () =>
      import("./modules/player/player.module").then(m => m.PlayerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
