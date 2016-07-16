/*:
 * RS_Question66487.js
 * @plugindesc 기본 공격 애니메이션을 Class ID에 따라 변경합니다.
 * @author biud436
 *
 * @help
 * Class 의 Note 란에 아래를 기입하세요.
 * <NormalAttackID:x>
 * x 는 애니메이션의 ID 입니다.
 */

(function () {
  Game_Actor.prototype.attackSkillId = function() {
    var c = $dataClasses[this._classId].meta;
    var id = Number(c.NormalAttackID) || 1;
    return id;
  };
})();