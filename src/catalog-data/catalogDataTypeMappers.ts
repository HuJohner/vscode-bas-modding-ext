import * as jsonc from 'jsonc-parser';

export const typeResolver = new Map<string, (key: string, node: jsonc.Node) => string | undefined>([
    [ 'ThunderRoad.AreaCollectionDungeon+AreaTableIdContainer, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['dataId', 'ThunderRoad.AreaTable, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.IAreaBlueprintGenerator+IAreaBlueprintGeneratorIdContainer, ThunderRoad', areaBlueprintGeneratorMapper ],
    [ 'ThunderRoad.AreaData+AreaConnectionTypeIdContainer, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['dataId', 'ThunderRoad.AreaConnectionTypeData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.BrainData, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['treeID', 'ThunderRoad.BehaviorTreeData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.AI.ChildTreeNode, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['childTreeID', 'ThunderRoad.BehaviorTreeData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.AI.Action.PickSpell, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['spellID', 'ThunderRoad.SpellCastData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.AI.Action.PickupItem, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['pickupAnimationId', 'ThunderRoad.AnimationData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.AI.Action.PlayAnimation, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['animationDataID', 'ThunderRoad.AnimationData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.AI.Action.SetStanceFromData, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['specifiedID', 'ThunderRoad.StanceData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.AI.Condition.HasSpell, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['spellID', 'ThunderRoad.SpellCastData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.AI.Condition.HasStatus, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['statusID', 'ThunderRoad.StatusData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.AI.Get.GetItem, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['itemID', 'ThunderRoad.ItemData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.BrainModuleDeath, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['defaultAnimationId', 'ThunderRoad.AnimationData, ThunderRoad'],
        ['stabAnimationId', 'ThunderRoad.AnimationData, ThunderRoad'],
        ['fireAnimationId', 'ThunderRoad.AnimationData, ThunderRoad'],
        ['lightningAnimationId', 'ThunderRoad.AnimationData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.BrainModuleFear, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['cowerAnimationID', 'ThunderRoad.AnimationData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.BrainModuleHitReaction, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['stunAnimationID', 'ThunderRoad.AnimationData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.BrainModuleShopkeeper, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['welcomeAnimationId', 'ThunderRoad.AnimationData, ThunderRoad'],
        ['buyAnimationId', 'ThunderRoad.AnimationData, ThunderRoad'],
        ['sellAnimationId', 'ThunderRoad.AnimationData, ThunderRoad'],
        ['angryAnimationId', 'ThunderRoad.AnimationData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.ColliderGroupData+Modifier', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['spellIds', 'ThunderRoad.SpellCastData, ThunderRoad'] // technically SpellCastCharge
    ])) ],
    [ 'ThunderRoad.ColliderGroupData+CustomSpellEffect, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['spellId', 'ThunderRoad.SpellCastData, ThunderRoad'],// technically SpellCastCharge
        ['effectId', 'ThunderRoad.EffectData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.ItemContent, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['referenceID', 'ThunderRoad.ItemData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.TableContent, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['referenceID', 'ThunderRoad.LootTable, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.SkillContent, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['referenceID', 'ThunderRoad.SkillData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.SpellContent, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['referenceID', 'ThunderRoad.SpellCastData, ThunderRoad']// technically SpellData
    ])) ],
    [ 'ThunderRoad.CreatureData, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['containerID', 'ThunderRoad.ContainerData, ThunderRoad'],
        ['brainId', 'ThunderRoad.BrainData, ThunderRoad'],
        ['focusReadyEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['focusFullEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['jumpEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['kickEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['playerFallDamageEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['voices', 'ThunderRoad.VoiceData, ThunderRoad'],
        ['expressionAttackId', 'ThunderRoad.ExpressionData, ThunderRoad'],
        ['expressionPainId', 'ThunderRoad.ExpressionData, ThunderRoad'],
        ['expressionDeathId', 'ThunderRoad.ExpressionData, ThunderRoad'],
        ['expressionChokeId', 'ThunderRoad.ExpressionData, ThunderRoad'],
        ['expressionAngryId', 'ThunderRoad.ExpressionData, ThunderRoad'],
        ['drownEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.CreatureData+EthnicGroup, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['allowedHeadsIDs', 'ThunderRoad.ItemData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.CreatureData+RagdollData, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['gripEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['footItemId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['footTrackedItemId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['bodyDefaultDamagerID', 'ThunderRoad.DamagerData, ThunderRoad'],
        ['penetrationEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.CreatureData+PartData, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['bodyDamagerID', 'ThunderRoad.DamagerData, ThunderRoad'],
        ['bodyAttackDamagerID', 'ThunderRoad.DamagerData, ThunderRoad'],
        ['sliceParentEffectid', 'ThunderRoad.EffectData, ThunderRoad'],
        ['sliceChildEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['penetrationDeepEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.CreatureTable+Drop, ThunderRoad', creatureTableDropMapper ],
    [ 'ThunderRoad.DamageModifierData+Collision, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['sourceMaterialIds', 'ThunderRoad.MaterialData, ThunderRoad'],
        ['targetMaterialIds', 'ThunderRoad.MaterialData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.DamagerData, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['damageModifierId', 'ThunderRoad.DamageModifierData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.EnemyConfig, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['patrolMixId', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['patrolMeleeId', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['patrolRangedId', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['alertMixId', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['alertMeleeId', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['alertRangedId', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['rareMixId', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['rareMeleeId', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['rareRangedId', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['meleeOnlyStd', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['meleeFocusedStd', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['mixedStd', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['rangedFocusedStd', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['meleeOnlyArena', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['meleeFocusedArena', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['mixedArena', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['rangedFocusedArena', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['meleeOnlyEnd', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['meleeFocusedEnd', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['mixedEnd', 'ThunderRoad.CreatureTable, ThunderRoad'],
        ['rangedFocusedEnd', 'ThunderRoad.CreatureTable, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.EnemyConfig+DescriptionByLevelId, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['levelId', 'ThunderRoad.LevelData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.CrystalHuntGameModeData, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['levelHome', 'ThunderRoad.LevelData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.InventoryStart, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['containerID', 'ThunderRoad.ContainerData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.Modules.CrystalHuntLevelInstancesModule, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['dalgarianEnemyConfigs', 'ThunderRoad.EnemyConfig, ThunderRoad'],
        ['dalgarianLootConfigs', 'ThunderRoad.LootConfig, ThunderRoad'],
        ['tutorialEnemyConfig', 'ThunderRoad.EnemyConfig, ThunderRoad'],
        ['tutorialLootConfig', 'ThunderRoad.LootConfig, ThunderRoad'],
        ['outpostEnemyConfigs', 'ThunderRoad.EnemyConfig, ThunderRoad'],
        ['outpostLootConfigs', 'ThunderRoad.LootConfig, ThunderRoad'],
        ['shopID', 'ThunderRoad.ShopData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Modules.CrystalHuntLevelInstancesModule+LevelInfo, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['levelId', 'ThunderRoad.LevelData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.Modules.LoreModule, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['LoreFoundSfxID', 'ThunderRoad.EffectData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.SandboxGameModeData, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['levelHome', 'ThunderRoad.LevelData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.HolderData, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['spawnItemID', 'ThunderRoad.ItemData, ThunderRoad'],
        ['itemIds', 'ThunderRoad.ItemData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.HandleRagdollData, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['grabEffectId', 'ThunderRoad.EffectData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.HandleData, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['grabEffectId', 'ThunderRoad.EffectData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.ItemData, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['iconEffectId', 'ThunderRoad.EffectData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.ItemData+ColliderGroup, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['colliderGroupId', 'ThunderRoad.ColliderGroupData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.ItemData+Damager, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['damagerID', 'ThunderRoad.DamagerData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.ItemData+EffectHinge, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['effectId', 'ThunderRoad.EffectData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.ItemData+Interactable, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['interactableId', 'ThunderRoad.HandleData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.ItemData+Whoosh, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['effectId', 'ThunderRoad.EffectData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.ItemModuleEdible, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['nextStageItemID', 'ThunderRoad.ItemData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.LiquidData+Content, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['liquidId', 'ThunderRoad.LiquidHealth, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.ItemModulePotion, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['effectFlowId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['healthEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['levelEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.ItemModuleSpell, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['spellId', 'ThunderRoad.SpellCastData, ThunderRoad']// technically SpellData
    ])) ],
    [ 'ThunderRoad.ItemModuleWardrobe, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['armorSoundEffectID', 'ThunderRoad.EffectData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.LevelModuleSurvival, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['firstRewardsContainerID', 'ThunderRoad.ContainerData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.LevelModuleSurvival+Waves, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['waveID', 'ThunderRoad.WaveData, ThunderRoad'],
        ['containerID', 'ThunderRoad.ContainerData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.LevelModuleMusic, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['dynamicMusic', 'ThunderRoad.Music, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.LevelData, ThunderRoad', levelDataMapper ],
    [ 'ThunderRoad.LevelAreaModule+AreaSpawnerData, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['areaCollectionId', 'ThunderRoad.AreaCollection, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.EnemyConfigOption, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['valueList', 'ThunderRoad.EnemyConfig, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.LootConfigData, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['sideRoomLootTableID', 'ThunderRoad.LootTable, ThunderRoad'],
        ['enemyDropLootTableID', 'ThunderRoad.LootTable, ThunderRoad'],
        ['treasureLootTableID', 'ThunderRoad.LootTable, ThunderRoad'],
        ['rewardLootTableID', 'ThunderRoad.LootTable, ThunderRoad'],
        ['altSideRoomLootTableID', 'ThunderRoad.LootTable, ThunderRoad'],
        ['altTreasureLootTableID', 'ThunderRoad.LootTable, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.LootTable+Drop, ThunderRoad', lootTableDropMapper ],
    [ 'ThunderRoad.EffectBundle, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['effectId', 'ThunderRoad.EffectData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.MaterialData+Collision, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['targetMaterialIds', 'ThunderRoad.MaterialData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.Music, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['groupsToLoad', 'ThunderRoad.MusicGroup, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.Music+MusicTransition, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['sourceGroup', 'ThunderRoad.MusicGroup, ThunderRoad'],
        ['destinationGroup', 'ThunderRoad.MusicGroup, ThunderRoad'],
        ['musicGroup', 'ThunderRoad.MusicGroup, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.MusicWaveSpawnerTransitionModule, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['ambianceMusicGroupId', 'ThunderRoad.MusicGroup, ThunderRoad'],
        ['waveMusicGroupId', 'ThunderRoad.MusicGroup, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.MusicStingerCombatKillModule, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['stingerEffectIdList', 'ThunderRoad.EffectData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.ShopData, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shopKeeperCreatureID', 'ThunderRoad.CreatureData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.ShopData+ShopStockCategory, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['restockTableID', 'ThunderRoad.LootTable, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillTemporalThunder, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillAirstrike, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['whooshEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shockwaveEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['playerEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['baseImpactEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['spellImpactEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['flourishEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['spellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['statusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillArcwire, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['arcEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['electrocuteStatusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['arcStaffEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['arcWireHitEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SkillAIModifier, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SkillArcherImbue, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SkillRicochetThrow, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['returnEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['grabEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillBoostJump, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SkillBruteForce, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['damagerId', 'ThunderRoad.DamagerData, ThunderRoad'],
        ['materialId', 'ThunderRoad.MaterialData, ThunderRoad'],
        ['karateChopTargetPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['karateChopDefaultPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.GripCastSkillData, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['spellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillChainLightning, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillChargeSapping, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SkillCastSpeed, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillCombatFocus, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillConflagration, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillDetonationSwarm, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['remoteDetonationSkillId', 'ThunderRoad.Skill.Spell.SkillRemoteDetonation, ThunderRoad'],
        ['burningStatusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillDilationBubble, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['statusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SkillDiscombobulate, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['bonkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['bonkAltEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SkillDiveStrike, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['effectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillElectromagnetism, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillEmergencyExit, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['statusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['effectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillFanTheFlames, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['effectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['statusEffectId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillFeatherFall, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['hoverEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderThunderRoad.Skill.Spell.SkillFireballRicochet, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['spellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['effectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillFireSapping, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['spellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['statusEffectId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SkillFlykick, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillFocusedReflexes, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillForceChoke, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillSpellPunch, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['baseImpactEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['spellImpactEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['flourishEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['spellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['statusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillInfernoStaff, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['flamethrowerEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['burningId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillGravityHammer, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['whooshEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillSapStatusApplier, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['spellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['statusEffectId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillHeatwave, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['effectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['statusEffectId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillHeavyFirepower, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['effectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillFireballRedirection, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillHyperFocus, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['effectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['handEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillBurning, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['statusEffectId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['ignitionBlockedMaterials', 'ThunderRoad.MaterialData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillIgnitionBurst, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['remoteDetonationSkillId', 'ThunderRoad.Skill.Spell.SkillRemoteDetonation, ThunderRoad'],
        ['burningStatusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillImpactPulse, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['effectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillGravityDecapitate, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['effectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SkillIntimidation, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SkillCharger, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['linesEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shoveEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['stepEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillHoverSlam, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillCreatureControl, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillMassReduction, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SkillMeleeImbue, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['spellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SkillMightyKick, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['kickEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillMoltenArc, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['statusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillOvercharge, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SpellMerge.SpellMergeMoltenBeam, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['beamEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['trailEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueSpellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['statusEffectId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['leftSpellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['rightSpellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['chargeEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['fingerEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['throwEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['closeHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['openHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillPrecisionFocus, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SkillRangedExpert, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['pierceEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillRemoteDetonation, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['explosionEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillRepellingBurst, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['skillRemoteDetonationId', 'ThunderRoad.Skill.Spell.SkillRemoteDetonation, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillRipAndTear, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillRiptide, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['tetherEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['grabEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['throwEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['statusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillSpellPunch, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['baseImpactEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['spellImpactEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['flourishEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['spellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['statusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SkillSecondWind, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['startEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['loopEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillShockParry, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['statusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillShockTrip, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SkillImprovedStealth, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SpellMerge.SpellMergeGravnado, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['tornadoId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['previewEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['previewLoopEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['electrocuteStatusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['floatingStatusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['thunderboltId', 'ThunderRoad.Skill.Spell.SkillThunderbolt, ThunderRoad'],
        ['leftSpellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['rightSpellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['chargeEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['fingerEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['throwEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['closeHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['openHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillStaggerThrow, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillStaticDisarm, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SpellMerge.SpellMergeNeutronCore, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['meteorEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['meteorExplosionEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['meteorItemId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['meteorImbueSpellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['statusEffectId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['leftSpellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['rightSpellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['chargeEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['fingerEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['throwEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['closeHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['openHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillTeleSpin, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillTeleThrow, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillSlowingParry, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['statusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillTeslaWires, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['arcLoopEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['skillArcwireId', 'ThunderRoad.Skill.Spell.SkillArcwire, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillThunderbolt, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['mainBoltEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['impactEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['statusEffectId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillThunderPunch, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['boltEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['baseImpactEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['spellImpactEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['flourishEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['spellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['statusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillTwinFlame, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['remoteDetonationId', 'ThunderRoad.Skill.Spell.SkillRemoteDetonation, ThunderRoad'],
        ['linkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['dropEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['wallEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['statusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillWeaponTheft, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['boltEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillWeightlessBoost, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['statusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['boostJumpSkillId', 'ThunderRoad.Skill.Spell.SkillBoostJump, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SkillWeightlessKinesis, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['statusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SkillGrappler, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.SkillTreeData, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['crystalItemId', 'ThunderRoad.ItemData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SpellCastTest, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['itemId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['remoteDetonationId', 'ThunderRoad.Skill.Spell.SkillRemoteDetonation, ThunderRoad'],
        ['chargeEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['readyEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['readyMinorEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['fingerEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['closeHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['openHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['throwEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['sprayHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['gripCastEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['gripCastStatusEffectId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['imbueMetalEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueBladeEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueCrystalEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueNaaEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueTransferEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['staffSlamTipEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['staffSlamCollisionEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['iconEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SpellMergeTest, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['leftSpellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['rightSpellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['chargeEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['fingerEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['throwEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['closeHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['openHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SpellCastProjectile, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['projectileEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['projectileId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['projectileDamagerId', 'ThunderRoad.DamagerData, ThunderRoad'],
        ['projectileDeflectEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['fireSparkStatusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['imbueHitStatusEffectId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['imbueUseEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueUseProjectileEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueHitProjectileEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['chargeEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['readyEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['readyMinorEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['fingerEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['closeHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['openHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['throwEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['sprayHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['gripCastEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['gripCastStatusEffectId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['imbueMetalEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueBladeEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueCrystalEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueNaaEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueTransferEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['staffSlamTipEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['staffSlamCollisionEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['iconEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SpellMerge.SpellMergeFire, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['meteorEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['meteorExplosionEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['meteorItemId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['meteorImbueSpellId', 'ThunderRoad.SpellCastData, ThunderRoad'],// technically SpellCastCharge
        ['statusEffectId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['leftSpellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['rightSpellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['chargeEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['fingerEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['throwEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['closeHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['openHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SpellCastGravity, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['dualPushEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['pushEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['pushStatusEffectId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['imbueHitEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueHitItemEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueHitRagdollEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueStatusEffectId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['staffSlamPlayerEffect', 'ThunderRoad.EffectData, ThunderRoad'],
        ['chargeEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['readyEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['readyMinorEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['fingerEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['closeHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['openHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['throwEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['sprayHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['gripCastEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['gripCastStatusEffectId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['imbueMetalEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueBladeEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueCrystalEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueNaaEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueTransferEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['staffSlamTipEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['staffSlamCollisionEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['iconEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SpellMerge.SpellMergeGravity, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['bubbleEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['statusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['leftSpellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['rightSpellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['chargeEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['fingerEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['throwEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['closeHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['openHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.Spell.SpellCastLightning, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['imbueHitEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueHitRagdollEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['boltEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['boltLoopEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['boltHitEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['boltHitImbueEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['electrocuteStatusId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['chargeEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['readyEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['readyMinorEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['fingerEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['closeHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['openHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['throwEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['sprayHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['gripCastEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['gripCastStatusEffectId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['imbueMetalEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueBladeEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueCrystalEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueNaaEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueTransferEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['staffSlamTipEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['staffSlamCollisionEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['iconEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SpellMerge.SpellMergeLightning, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['beamEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['imbueSpellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['beamImpactEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['chainEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['statusEffectId', 'ThunderRoad.StatusData, ThunderRoad'],
        ['leftSpellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['rightSpellId', 'ThunderRoad.SpellCastData, ThunderRoad'],
        ['chargeEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['fingerEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['throwEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['closeHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['openHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SpellPower.SpellPowerSlowTime, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['effectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['hyperFocusSkillID', 'ThunderRoad.Skill.Spell.SkillHyperFocus, ThunderRoad'],
        ['focusDepletedEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.Skill.SpellPower.SpellTelekinesis, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['defaultHandEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['ragdollHandEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['ragdollGripEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['teleSpinId', 'ThunderRoad.Skill.Spell.SkillTeleSpin, ThunderRoad'],
        ['spinEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['pushEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['closeHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['openHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['shardId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['orbLinkEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['primarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
        ['secondarySkillTreeId', 'ThunderRoad.SkillTreeData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.CatalogThreshold, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['effectId', 'ThunderRoad.EffectData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.StatusDataBurning, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['heatAnimationId', 'ThunderRoad.AnimationData, ThunderRoad'],
        ['igniteEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['smokingMainEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['smokingLimbEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['burningMainEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['burningLimbEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.StatusDataFloating, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['slamEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['lithobrakeId', 'ThunderRoad.Skill.Spell.SkillHoverSlam, ThunderRoad'],
        ['creatureEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['itemEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.StatusDataElectrocute, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['creatureEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['itemEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.StatusDataSlowed, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['creatureEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['itemEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.StatusDataSpeed, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['creatureEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['itemEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.WaveData, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['waveSelectors', 'ThunderRoad.LevelData, ThunderRoad']
    ])) ],
    [ 'ThunderRoad.WaveData+Group, ThunderRoad', creatureTableDropMapper ],
    [ 'ThunderRoad.GameData, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['defaultPlayerMaleCreatureID', 'ThunderRoad.CreatureData, ThunderRoad'],
        ['defaultPlayerFemaleCreatureID', 'ThunderRoad.CreatureData, ThunderRoad'],
        ['spellWheelEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['SpellWheelOpenHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['SpellWheelCloseHandPoseId', 'ThunderRoad.HandPoseData, ThunderRoad'],
        ['skillOrbInHandEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['defaultWheelOrbEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['deathEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
    ])) ],
    [ 'ThunderRoad.WaterHandler+Data, ThunderRoad', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['footstepEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
        ['underwaterEffectId', 'ThunderRoad.EffectData, ThunderRoad'],
    ])) ],

    // QuestFramework
    [ 'QuestFramework.POI.PointOfInterest, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['levelId', 'ThunderRoad.LevelData, ThunderRoad'],
        ['areaId', 'ThunderRoad.AreaData, ThunderRoad'],
    ])) ],
    [ 'QuestFramework.POI.Destruction, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['levelId', 'ThunderRoad.LevelData, ThunderRoad'],
        ['areaId', 'ThunderRoad.AreaData, ThunderRoad'],
        ['itemIds', 'ThunderRoad.ItemData, ThunderRoad'],
        ['itemVariableQuestId', 'QuestFramework.QuestData, QuestFramework'],
        ['creatureIds', 'ThunderRoad.CreatureData, ThunderRoad'],
        ['creatureVariableQuestId', 'QuestFramework.QuestData, QuestFramework'],
    ])) ],
    [ 'QuestFramework.POI.GoToLevel, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['levelId', 'ThunderRoad.LevelData, ThunderRoad'],
        ['areaId', 'ThunderRoad.AreaData, ThunderRoad'],
        ['destinationLevelId', 'ThunderRoad.LevelData, ThunderRoad'],
    ])) ],
    [ 'QuestFramework.POI.Item, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['levelId', 'ThunderRoad.LevelData, ThunderRoad'],
        ['areaId', 'ThunderRoad.AreaData, ThunderRoad'],
        ['itemId', 'ThunderRoad.ItemData, ThunderRoad'],
    ])) ],
    [ 'QuestFramework.POI.Npc, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['levelId', 'ThunderRoad.LevelData, ThunderRoad'],
        ['areaId', 'ThunderRoad.AreaData, ThunderRoad'],
        ['creatureId', 'ThunderRoad.CreatureData, ThunderRoad'],
        ['containerId', 'ThunderRoad.ContainerData, ThunderRoad'],
        ['brainId', 'ThunderRoad.BrainData, ThunderRoad'],
    ])) ],
    [ 'QuestFramework.Conditions.CompareBoolVariable, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['questId', 'QuestFramework.QuestData, QuestFramework']
    ])) ],
    [ 'QuestFramework.Conditions.CompareIntVariable, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['questId', 'QuestFramework.QuestData, QuestFramework']
    ])) ],
    [ 'QuestFramework.Conditions.CompareFloatVariable, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['questId', 'QuestFramework.QuestData, QuestFramework']
    ])) ],
    [ 'QuestFramework.Conditions.CompareStringVariable, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['questId', 'QuestFramework.QuestData, QuestFramework']
    ])) ],
    [ 'QuestFramework.Conditions.CompareTimeVariable, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['questId', 'QuestFramework.QuestData, QuestFramework']
    ])) ],
    [ 'QuestFramework.Conditions.InZone, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['creatureIds', 'ThunderRoad.CreatureData, ThunderRoad'],
        ['itemIds', 'ThunderRoad.ItemData, ThunderRoad'],
    ])) ],
    [ 'QuestFramework.Conditions.ItemInInventory, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['itemId', 'ThunderRoad.ItemData, ThunderRoad']
    ])) ],
    [ 'QuestFramework.Conditions.QuestState, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['questId', 'QuestFramework.QuestData, QuestFramework']
    ])) ],
    [ 'QuestFramework.Interactions.Animation, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['animationDataId', 'ThunderRoad.AnimationData, ThunderRoad']
    ])) ],
    [ 'QuestFramework.Interactions.Effect, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['effectId', 'ThunderRoad.EffectData, ThunderRoad']
    ])) ],
    [ 'QuestFramework.Interactions.GiveItem, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['itemId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['prepareAnimationDataId', 'ThunderRoad.AnimationData, ThunderRoad'],
        ['waitAnimationDataId', 'ThunderRoad.AnimationData, ThunderRoad'],
        ['finishAnimationDataId', 'ThunderRoad.AnimationData, ThunderRoad'],
        ['cancelAnimationDataId', 'ThunderRoad.AnimationData, ThunderRoad'],
    ])) ],
    [ 'QuestFramework.Interactions.IncrementFloatVariable, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['questId', 'QuestFramework.QuestData, QuestFramework']
    ])) ],
    [ 'QuestFramework.Interactions.IncrementIntVariable, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['questId', 'QuestFramework.QuestData, QuestFramework']
    ])) ],
    [ 'QuestFramework.Interactions.MoveTo, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['areaId', 'ThunderRoad.AreaData, ThunderRoad']
    ])) ],
    [ 'QuestFramework.Interactions.ReceiveItem, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['itemId', 'ThunderRoad.ItemData, ThunderRoad'],
        ['receiveAnimationDataId', 'ThunderRoad.AnimationData, ThunderRoad'],
        ['storeAnimationDataId', 'ThunderRoad.AnimationData, ThunderRoad'],
        ['finishAnimationDataId', 'ThunderRoad.AnimationData, ThunderRoad'],
    ])) ],
    [ 'QuestFramework.Interactions.SetBoolVariable, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['questId', 'QuestFramework.QuestData, QuestFramework']
    ])) ],
    [ 'QuestFramework.Interactions.SetIntVariable, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['questId', 'QuestFramework.QuestData, QuestFramework']
    ])) ],
    [ 'QuestFramework.Interactions.SetFloatVariable, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['questId', 'QuestFramework.QuestData, QuestFramework']
    ])) ],
    [ 'QuestFramework.Interactions.SetStringVariable, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['questId', 'QuestFramework.QuestData, QuestFramework']
    ])) ],
    [ 'QuestFramework.Interactions.SetTimeVariable, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['questId', 'QuestFramework.QuestData, QuestFramework']
    ])) ],
    [ 'QuestFramework.Interactions.SetRandomIntVariable, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['questId', 'QuestFramework.QuestData, QuestFramework']
    ])) ],
    [ 'QuestFramework.Interactions.SetRandomFloatVariable, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['questId', 'QuestFramework.QuestData, QuestFramework']
    ])) ],
    [ 'QuestFramework.Interactions.TeleportPlayer, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['areaId', 'ThunderRoad.AreaData, ThunderRoad']
    ])) ],
    [ 'QuestFramework.Interactions.UpdateNpc, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['containerId', 'ThunderRoad.ContainerData, ThunderRoad'],
        ['brainId', 'ThunderRoad.BrainData, ThunderRoad'],
    ])) ],
    [ 'QuestFramework.Interactions.Wave, QuestFramework', (key, n) => basicPropertyMapper(key, new Map<string, string>([
        ['waveId', 'ThunderRoad.WaveData, ThunderRoad']
    ])) ],
]);

function basicPropertyMapper(key: string, map: Map<string, string>) {
    return map.get(key);
}

function areaBlueprintGeneratorMapper(key: string, node: jsonc.Node) {
    if (key === 'dataId') {
        const categoryValue = findChildPropertyValue(node, 'category');
        switch (categoryValue) {
            case 'Area': return 'ThunderRoad.AreaData, ThunderRoad';
            case 'AreaCollection': return 'ThunderRoad.AreaCollectionDungeon, ThunderRoad';
        }
    }

    return undefined;
}

function creatureTableDropMapper(key: string, node: jsonc.Node) {
    if (key === 'referenceID') {
        const referenceValue = findChildPropertyValue(node, 'reference');
        switch (referenceValue) {
            case 'Creature': return 'ThunderRoad.CreatureData, ThunderRoad';
            case 'Table': return 'ThunderRoad.CreatureTable, ThunderRoad';
            default: return undefined;
        }
    }

    switch (key) {
        case 'overrideContainerID': return 'ThunderRoad.ContainerData, ThunderRoad';
        case 'overrideBrainID': return 'ThunderRoad.BrainData, ThunderRoad';
        default: return undefined;
    }
}

function levelDataMapper(key: string, node: jsonc.Node) {
    if (key === 'improvisedThrowableID') {
        const throwableRefTypeValue = findChildPropertyValue(node, 'throwableRefType');
        switch (throwableRefTypeValue) {
            case 'Item': return 'ThunderRoad.ItemData, ThunderRoad';
            case 'Table': return 'ThunderRoad.LootTable, ThunderRoad';
            default: return undefined;
        }
    }

    return undefined;
}

function lootTableDropMapper(key: string, node: jsonc.Node) {
    if (key === 'referenceID') {
        const referenceValue = findChildPropertyValue(node, 'reference');
        switch (referenceValue) {
            case 'Item': return 'ThunderRoad.ItemData, ThunderRoad';
            case 'Table': return 'ThunderRoad.LootTable, ThunderRoad';
            default: return undefined;
        }
    }

    return undefined;
}

function findChildPropertyValue(node: jsonc.Node, name: string): string | undefined {
    if (!node.children) {
        return undefined;
    }
    for (const child of node.children) {
        if (child.children && child.children.length > 1 && child.children[0].value === name) {
            return child.children[1].value;
        }
    }
}